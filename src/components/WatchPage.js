import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constants';
import { addVideoDetail } from '../utils/videoSlice';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const getVideo = async () => {
       const data = await fetch ("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + searchParams.get("v") + "&key=" + GOOGLE_API_KEY);
       const json = await data.json();
       dispatch(addVideoDetail(json.items[0]));
    }
    useEffect(()=>{
        dispatch(closeMenu());
        getVideo();
    },[])
  return (
    <div>
      <iframe width="760" height="515" className='rounded-lg ml-16' src={`https://www.youtube.com/embed/${searchParams.get("v")}`}/>

    </div>
  )
}

export default WatchPage
