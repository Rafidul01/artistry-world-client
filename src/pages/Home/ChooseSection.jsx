
const ChooseSection = () => {
    return (
        <div  className="mt-28 font-poppins px-4 py-2 mt-4 shadow-lg border border-[#973e12] pb-8">
            <h1 className="font-lato text-2xl text-center font-bold my-8 ">Why Choose Us ?</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-2 ">
                <div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/7K77wnK/Humaaans-Plant-6.png" alt="" 
                    className="h-64"
                    />
                    <h1 className="font-semibold text-lg">FREE SHIPPING</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Enjoy free shipping on all your favorite art and craft items!</p>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/FDW8kFz/Humaaans-Plant-2.png" className="h-64" alt="" />
                    <h1 className="font-semibold text-lg">SECURE PAYMENT</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Your security is our priority—experience worry-free checkout!</p>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <img src="https://i.ibb.co/WkQtZt1/Humaaans-Plant-1.png" className="h-64" alt="" />
                    <h1 className="font-semibold text-lg">FAST & SAFE DELIVERY</h1>
                    <p className="text-center text-sm opacity-80 max-w-[250px]">Enjoy fast, safe delivery for all your crafting needs!</p>
                </div>
            </div>


            
        </div>
    );
};

export default ChooseSection;