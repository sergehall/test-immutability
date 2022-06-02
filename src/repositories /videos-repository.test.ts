import {ReturnDataType, VideosType} from "../types";
import {videosRepository} from "./videos-repository";


const videos: VideosType = [
  {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
  {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
  {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
  {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
  {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]


describe('some tests for videos', () => {
  it('get videos', () => {
    const getVideos = videosRepository.getVideos
    expect(getVideos()).toEqual(videos);
  });

  it('get getVideoById', () => {
    const id = 1;
    const getVideoById: ReturnDataType = videosRepository.getVideoById(id)

    expect(getVideoById).toEqual({
      data: {
        id: 1,
        title: 'About JS - 01',
        author: 'it-incubator.eu'
      },
      errorsMessages: [],
      resultCode: 0
    });
  });
});