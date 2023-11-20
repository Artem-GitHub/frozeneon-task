import AxiosApi from '@/api/axios.api'
import PackagesService from '@/services/packages.service'

const axiosApi: AxiosApi = new AxiosApi()

const packagesService: PackagesService = new PackagesService(axiosApi)

export { packagesService }
