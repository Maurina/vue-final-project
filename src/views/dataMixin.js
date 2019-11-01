/* eslint-disable indent */
import { nasaDataSets } from '../assets/nasa'

export const dataMixin = {
  data () {
    return {
      nasaDataSets
    }
  },
  computed: {
    earthSort () {
        return this.nasaDataSets.map(earth => {
            return earth.filter(function (item) {
                return !item.string.includes('Earth')
            })
        })
    }
  }
}
