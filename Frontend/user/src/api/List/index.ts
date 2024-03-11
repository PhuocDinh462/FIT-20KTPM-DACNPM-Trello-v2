import { axiosPrivate } from '../api'

export const getAllList = async (data: any) => {
  try {
    return await axiosPrivate.get('/v1/class/createClass', {
      headers: {}
    })
  } catch (err) {
    throw err
  }
}

export const createList = async (data: any) => {
  try {
    return await axiosPrivate.post('/v1/class/createClass', data, {
      headers: {}
    })
  } catch (err) {
    throw err
  }
}
