import Image from "next/image";
export default function Home( {src, id, name, role, email} ) {
    return (
        <div className="w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-white w-full p-8 flex justify-center">
                <Image
                    src="https://res.cloudinary.com/dvokuaohw/image/upload/v1726583873/studentData/oxyuuuptrivt4hyqr6wy.png" 
                    alt="Organization Logo"
                    width={100}
                    height={100}
                    className="rounded-full scale-125"
                />
            </div>

            <div className="flex flex-col items-center p-6">
                <Image
                    src={src} 
                    alt="Student Picture"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-blue-500"
                />

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-1">Student ID: {id}</p>

                <div className="mt-4 text-center">
                    <p className="text-blue-500 text-sm font-medium">Role: {role}</p>
                    <p className="text-gray-600 text-sm mt-1">Email: <br/>{email}</p>
                </div>
            </div>
        </div>
    );
}