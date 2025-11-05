import footerCard from "../Data/footer.js";
import BottomSection from "../Data/bottom.js";
const Footer = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-6 p-24 bg-[#EAEFF7]">
            {footerCard.map((f)=>(
                <footer key={f.id} className="text-xm font-medium space-y-1" >
                   <div> {f.title}</div>
                  
                 <div className="space-y-6  ">
                     {f.items.map((items)=>(
                   <p className="text-sm font-normal " key={f.id}>{items.label}</p>
                  ))}
                 </div>
                </footer>
                
            ))}
<div className="col-span-full mt-5">
  <div className="w-full border-[0.5px] border-gray-300"></div>
</div>

{/* Icons + Right Image */}
<div className="col-span-full w-full flex items-center justify-between pt-5">
  <div className="flex gap-5">
    {BottomSection.map((b) => (
      <img
        key={b.id}
        className="w-3.5 h-3.5 object-contain"
        src={b.src}
        alt=""
      />
    ))}
  </div>

  <img
    className="w-17 h-17 object-contain"
    src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00"
    alt=""
  />
</div>

{/* Bottom text */}
<div className="col-span-full pt-2">
  <p className="text-sm text-black">
    ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
  </p>
</div>

        </div>

    );
}

export default Footer