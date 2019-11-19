/* eslint-disable indent */
import { nasaDataSets } from '../nasa.js'
export const dataMixin = {
  data () {
    return {
      nasaDataSets
    }
  }
 /* computed: {
    earthSort () {
        return this.nasaDataSets.map(earth => {
            return earth.filter(function (item) {
                return !item.string.includes('Earth')
            })
        })
    }
  } */
}
