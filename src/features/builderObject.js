import { IoDocumentTextSharp, IoImageSharp, IoImagesSharp, IoAppsSharp, IoMenu, IoJournalSharp, IoAccessibility, IoFileTrayFull, IoNewspaper, IoImages, IoFilter, IoCart } from "react-icons/io5";

export const builderObject = {
    div: ['Div', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    div2: ['SplitDiv', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    div3: ['TripleDiv', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    nav: ['Nav', <IoMenu key={Math.random()} className='text-4xl'/>],
    footer: ['Footer', <IoJournalSharp key={Math.random()} className='text-4xl rotate-90'/>],
    sidenav: ['SideNav', <IoDocumentTextSharp key={Math.random()} className='text-4xl'/>],
    img: ['Img', <IoImageSharp key={Math.random()} className='text-4xl'/>],
    img2: ['DoubleImg', <IoImagesSharp key={Math.random()} className='text-4xl'/>],
    table: ['Table', <IoAppsSharp key={Math.random()} className='text-4xl'/>],
    hero2: ['Hero', <IoAccessibility key={Math.random()} className='text-4xl'/>],
    form: ['Form', <IoFileTrayFull key={Math.random()} className='text-4xl'/>],
    blog: ['Blog', <IoNewspaper key={Math.random()} className='text-4xl'/>],
    imageGallery: ['ImageGallery', <IoImages key={Math.random()} className='text-4xl'/>],
    breadCrumb: ['BreadCrumb', <IoFilter key={Math.random()} className='text-4xl'/>],
    checkOutForm: ['CheckOutForm', <IoCart key={Math.random()} className="text-4xl"/>]
}

