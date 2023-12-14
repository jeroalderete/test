
'use client';
import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";



interface Props {
    path: string;
    text: string;
}


// todo esto es generado del lado del servidor

const ActiveLink = ({path, text}: Props) => {


const pathName = usePathname();

console.log(pathName)



  return (
    <Link                       // se pone en corchetes para que el menos no afecte en js
                              // si el pathName es igual al path entonces le asigno la clase active
    className={` ${style.link} ${(pathName === path ) && style['active-link']}`}
    href={path}>
        {text}</Link>
  )
}

export default ActiveLink