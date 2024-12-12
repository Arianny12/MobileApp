import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const postReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload)
    case 'edit_post':
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post
      })
    default:
      return state
  }
}

const getDiaryPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('posts')
    dispatch({type: 'get_posts', payload: response.data})
  }
}

const addDiaryPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/posts', {title, content})
    if (callback) {
      callback()
    }
  }
}

const deleteDiaryPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/posts/${id}`)
    dispatch({type: 'delete_post', payload: id})
  }
}

const editDiaryPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/posts/${id}`, {title, content})

    dispatch({type: 'edit_post', payload: {id, title, content}})
    if (callback) {
      callback()
    }
  }
}

export const {Context, Provider} = createDataContext(
  postReducer,
  {
    getDiaryPosts,
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost,
  },
  [
    {
      id: 123,
      title: 'I feel Happpyyyy',
      content:
        'test content so that we dont have to create a new post every time we reload!',
    },
    {
      id: 345,
      title: 'Today Was Great',
      content:
        'test content so that we dont have to create a new post every time we reload!',
    },
    {
      id: 567,
      title: 'I feel good',
      content:
        'test content so that we dont have to create a new post every time we reload!',
    },
  ]
)