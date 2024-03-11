import { axiosPrivate } from '../api'

export const createClass = async (data: any) => {
  try {
    return await axiosPrivate.post('/v1/class/createClass', data, {
      headers: {}
    })
  } catch (err) {
    throw err
  }
}
