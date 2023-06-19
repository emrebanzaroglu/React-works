import * as actionTypes from "./actionTypes";

export function getBlogsSuccess(blogs) {
  return { type: actionTypes.GET_BLOGS_SUCCESS, payload: blogs };
}

export function changeBlog(blogsDetail) {
  return { type: actionTypes.GET_BLOGS_DETAILS_SUCCESS, payload: blogsDetail };
}

export function getBlogs(source) {
  return function (dispatch) {
    let url = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
      if (source) {
        url = url + "?source=" + source;
    }
    return fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: "apikey 2GoKrWOQLPuLGXkyeqtQ41:2wqCam7ibgDYbTwhtSTnVX",
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(getBlogsSuccess(data.result)));
  };
}
