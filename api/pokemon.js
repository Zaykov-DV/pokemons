import axios from 'axios'
import axiosUrl from '../utils/_axiosUrl'

export const getPokemonInfo = async (id) => {
    const response = await axios({
        method: 'get',
        url: axiosUrl(`pokemon/${id}`),
    })

    return response.data ?? {}
}
