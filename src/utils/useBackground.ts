import  { useEffect } from 'react'

export default function useBackground(background: string | undefined, defaultpic: boolean | undefined) : void {
   let fullpath;
   if(!background || defaultpic){
    fullpath = `/background/homepage.jpg`
   }
     else { fullpath = `/background/${background?.replace(" ", "_")}.jpg`}
    console.log(fullpath);
  useEffect(() => {
    
    const root = document.documentElement;
     root.style.setProperty("--background-country", `url("${fullpath}")`);
  },[fullpath])
}