import {ErrorType, ReturnDataType} from "../types";

let videos = [
  {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
  {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
  {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
  {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
  {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

const idDoesNotExist: ErrorType = {
  message: "such an id does not exist",
  field: "id"
}
const titleDoesNotExist: ErrorType = {
  message: "such an title does not exist",
  field: "title"
}

const titleHasIncorrect: ErrorType = {
  message: "input title has incorrect values",
  field: "title"
}

export const videosRepository = {
  getVideos() {
    return videos
  },

  getVideoById(id: number): ReturnDataType {
    const video = videos.find(v => v.id === id)
    const errorsMessages: Array<ErrorType> = [];
    let resultCode = 0;

    if (!video) {
      errorsMessages.push(idDoesNotExist)
      return {
        data: null,
        errorsMessages: errorsMessages,
        resultCode: 1
      }
    }
    return {
      data: video,
      errorsMessages: errorsMessages,
      resultCode: resultCode
    }
  },

  updateVideoById(id: number, title: string): ReturnDataType {
    const updatedVideo = videos.find(v => v.id === id)
    let errorsMessages: Array<ErrorType> = [];
    let resultCode = 0

    if (!updatedVideo) {
      errorsMessages.push(idDoesNotExist)
      return {
        data: null,
        errorsMessages: errorsMessages,
        resultCode: resultCode
      }
    }

    if (title.length <= 0 || title.length > 40) {
      errorsMessages.push(titleHasIncorrect)
    }

    if (errorsMessages.length > 0) {
      return {
        data: null,
        errorsMessages: errorsMessages,
        resultCode: 1
      }
    }
    return {
      data: updatedVideo,
      errorsMessages: [],
      resultCode: resultCode
    }
  },

  createVideo(title: string): ReturnDataType {
    let errorsMessages: Array<ErrorType> = [];
    const author = 'it-incubator.eu';
    let resultCode = 0

    if (!title) {
      errorsMessages.push(titleDoesNotExist)
      return {
        data: null,
        errorsMessages: errorsMessages,
        resultCode: 1
      }
    }
    if (title.length > 40) {
      errorsMessages.push(titleHasIncorrect)
      resultCode = 1
    }
    if (errorsMessages.length !== 0) {
      return {
        data: null,
        errorsMessages: errorsMessages,
        resultCode: resultCode
      }
    }

    const newId = +(new Date());
    const newAuthor = {
      id: newId,
      title: title,
      author: author
    }
    videos.push(newAuthor)

    return {
      data: newAuthor,
      errorsMessages: errorsMessages,
      resultCode: resultCode
    }
  },

  deleteVideoById(id: number): Boolean {
    const video = videos.filter(v => v.id === id)

    if (videos.filter(v => v.id === id) && videos.indexOf(video[0]) !== -1) {
      const newV = videos.indexOf(video[0]);
      videos.splice(newV, 1);
      return true
    } else {
      return false
    }
  },
}