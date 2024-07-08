import axios from 'axios'
import axiosUrl from '../utils/_axiosUrl'

export const getPokemons = async () => {
    const response = await axios({
        method: 'get',
        url: axiosUrl('pokemon'),
    })

    const pokemons = response.data.results ?? []

    const pokemonInfo = await axios.all(pokemons.map((p) => axios.get(axiosUrl(`pokemon/${p.name}`))));

    return pokemonInfo.map((info, index) => {
        return {
            ...pokemons[index],
            image: info.data.sprites?.front_default ?? '',
            stats: info.data.stats,
            type: info.data.types[0].type.name
        }
    })
}
