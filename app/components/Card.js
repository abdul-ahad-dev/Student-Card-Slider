import Image from "next/image";


export default function Home({ src, id, name, role, email }) {
    return (
        <div className="w-[300px] h-[500px] bg-blue-50 shadow-lg rounded-lg overflow-hidden">
            <div>
                <Image
                    src="https://res.cloudinary.com/dvokuaohw/image/upload/v1726763405/studentData/j1evlnbmphsrd2pzqjwf.png"
                    alt="Cover Image"
                    width={300} height={100}
                    className="object-cover px-6 pt-8"
                />
            </div>

            <div className="flex flex-col items-center p-6">
                <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-blue-500">
                    <Image
                        src={src}
                        alt="Student Picture"
                        width={130}
                        height={130}
                        className="object-cover"
                    />
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-1">Student ID: {id}</p>

                <div className="mt-4 text-center">
                    <p className="text-blue-500 text-sm font-medium">Role: {role}</p>
                    <p className="text-gray-600 text-sm mt-1">Email: <br />{email}</p>
                </div>
            </div>
        </div>
    );
}