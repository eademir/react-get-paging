import Image from "../../assets/uisoft-logo.png"

const Card = ({image, fullName, university, phone, dob, homeAddress,}:{image: string, fullName: string, university: string, phone: string, dob: string, homeAddress: string }) => {

    const randomArray = Array.from({ length: 30 }, () => {
        const randomWidth = Math.floor(Math.random() * 5) + 1;
        const color = "#3E829A";
        return {
            width: `${randomWidth}px`,
            height: "30px",
            backgroundColor: color,
        }
    });

  return (
    <div className={"w-fit p-4 m-4 border border-[#162651] rounded"}>
        <img className="w-32 m-auto my-4" src={Image} alt="" />
        <div className="flex flex-row text-[#162651] items-start">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-[600] text-[#162651]">{fullName}</h1>
                <div>
                    <div className="flex flex-row justify-between">
                        <div className={""}><p className="font-bold">UNIVERSITY</p></div>
                        <div className={"w-72 truncate overflow-hidden hover:text-clip"}><p>: {university}</p></div>
                    </div>
                    <div  className="flex flex-row justify-between">
                        <div className={""}><p className="font-bold">PHoNE</p></div>
                        <div className={"w-72 truncate overflow-hidden hover:text-clip"}><p>: {phone}</p></div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className={""}><p className="font-bold">D.O.B</p></div>
                        <div className={"w-72 truncate overflow-hidden hover:text-clip"}><p>: {dob}</p></div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className={""}><p className="font-bold">HOME ADDRESS</p></div>
                        <div className={"w-72 truncate overflow-hidden hover:text-clip"}><p>: {homeAddress}</p></div>
                    </div>
                    <div className={"w-full flex flex-row gap-1 py-4"}>
                        {randomArray.map((item, index) => (
                            <div key={index} style={item}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"w-44 px-4 flex justify-center items-center"}>
                <img className={"w-44 h-44 border-4 border-[#162651] rounded-2xl"} src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card;