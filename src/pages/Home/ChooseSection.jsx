import {  Bounce, Slide } from "react-awesome-reveal";

const ChooseSection = () => {
    return (
        <div  className="mt-28 font-poppins px-4 py-2 shadow-lg border border-[#973e12] pb-10">
            <h1 className="font-lato text-2xl text-center font-bold mt-8 mb-2 "><Bounce>Why Choose Us ?</Bounce></h1>
            <p className="text-center mb-8 max-w-2xl mx-auto text-xs md:text-base opacity-80"><Bounce>Discover why we are your top choice for art & craft: Quality materials, diverse selection, expert guidance, and endless inspiration.</Bounce></p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-2 ">
                <Slide direction="up" ><div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/7K77wnK/Humaaans-Plant-6.png" alt="" 
                    className="h-64"
                    />
                    <h1 className="font-semibold text-lg">FREE SHIPPING</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Enjoy free shipping on all your favorite art and craft items!</p> 
                </div>
                </Slide>
                <Slide direction="up" > <div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/FDW8kFz/Humaaans-Plant-2.png" className="h-64" alt="" />
                    <h1 className="font-semibold text-lg">SECURE PAYMENT</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Your security is our priority—experience worry-free checkout!</p>
                </div>
                </Slide>
                <Slide direction="up" > <div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/WkQtZt1/Humaaans-Plant-1.png" className="h-64" alt="" />
                    <h1 className="font-semibold text-lg">FAST & SAFE DELIVERY</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Enjoy fast, safe delivery for all your crafting needs!</p>
                </div>
                </Slide>
            </div>


            
        </div>
    );
};

export default ChooseSection;