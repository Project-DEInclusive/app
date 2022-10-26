/*    Imports    */
import { useRouter } from "next/router";

import fetcher from "../../constants/fetch/event";
import ReactHtmlParser from "react-html-parser";
import YouTube from "react-youtube";

import { CalendarIcon } from "@heroicons/react/solid";

// const requiedFields = { _id: 1, name: 1, description: 1, content: 1, thumbnail: 1, createdAt: 1 };

export async function getServerSideProps(context) {
  const cookie = context?.req?.headers?.cookie;
  if (!context.query.id) return { props: { event: null }, notFound: true };
  const event = await fetcher.getById_Public(context.query.id, {}, () => {}, {
    headers: {
      Cookie: cookie,
    },
  });
  return {
    notFound: !event,
    props: { event },
  };
}

const Index = ({ event }) => {
  const router = useRouter();

  // convert string date to date object
  const getDate = (strdate) => {
    const date = new Date(strdate);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${
      date.getHours() >= 12 ? "PM" : "AM"
    }`;
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const video_id = event.videos[0].url.split(".be/")[1];
  const ampersandPosition = video_id.indexOf("&");
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  console.log(video_id);
  return (
    <main className="max-w-7xl mx-auto px-10">
      <div className="mt-10">
        <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6mt-3 text-gray-500 md:gap-x-8 lg:gap-x-8">
          <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
            <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${event._id}?key=${event.thumbnail.src}`}
                alt={event.name}
                className="object-center object-cover w-full"
              />
            </div>
          </div>
          <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
            <YouTube
              videoId={video_id}
              opts={opts}
              onReady={(e) => e.target.pauseVideo()}
            />
            <h1 className="text-3xl font-semibold text-gray-900">
              {event.name}
            </h1>
            <p className="font-medium text-gray-400 mt-2 mb-3 flex flex-row">
              <CalendarIcon className="w-5 h-5 mr-5" />
              {getDate(event.time.starttime)}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Event Description
            </h3>
            <p className="text-gray-500 mt-3 text-base">{event.description}</p>
          </div>
          <div className="sm:col-span-12 md:col-span-7">
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Event Article
            </h3>
            <div className="text-gray-800 mt-6 text-base">
              {ReactHtmlParser(event.content)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

Index.layout = "main";
