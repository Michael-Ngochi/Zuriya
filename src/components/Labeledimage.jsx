const Labeledimage = ({title,src,description}) => {
    return (
<>
<div className="relative rounded-lg overflow-hidden shadow-lg md:m-4 ">
    {/* label and description */}
    <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/50 text-stone-300 p-4 space-y-2">
    <h3 className="text-5xl md:text-9xl">{title}</h3>
    <p className=" text-xl md:text-3xl">{description}</p>
    </div>
    <img src={src} alt={title} className="w-full h-full object-cover" />
</div>
</>
    )
}
export default Labeledimage