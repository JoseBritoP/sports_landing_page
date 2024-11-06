import { Button } from "@/components/ui/button"

type ButtonType = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'nav' | 'banner' | 'bannerTwo'
interface ButtonTypeProps {
  type?:ButtonType
  label:string
}
export function ButtonType({type='default',label='Test'}:ButtonTypeProps) {
  return <Button variant={type}>{label}</Button>
}