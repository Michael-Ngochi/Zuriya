import {React} from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { products,bundles } from '@/data'



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const IndividualProduct = () => {
    const {slug} = useParams();
    const{product, setProduct} = products.find((product)=> product.slug === slug) || {};
    console.log(product);
    return (
        <>
<Breadcrumb className="m-4">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink className="hover:text-primary"><NavLink to="/products">products</NavLink></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{slug}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>




        The product is {slug}
        </>
    )
}

export default IndividualProduct