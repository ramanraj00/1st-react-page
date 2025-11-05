import footerCard from "../Data/footer.js";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 p-24 bg-[#EAEFF7]  ">
            {footerCard.map((f)=>(
                <footer key={f.id} className="text-xm font-medium space-y-1" >
                   <div> {f.title}</div>
                  
                 <div className="space-y-6">
                     {f.items.map((items)=>(
                   <p className="text-sm font-normal " key={f.id}>{items.label}</p>
                  ))}
                 </div>

                </footer>
            ))}

          

        </div>

    )
}

export default Footer