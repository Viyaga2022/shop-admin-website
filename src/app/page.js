import AdminValidation from '@/components/adminValidation'
import PageLoading from '@/components/loadingEffects/pageLoading/PageLoading'

const page = () => {
 
  return (
    <>
      <AdminValidation />
      <PageLoading />
    </>
  )
}

export default page