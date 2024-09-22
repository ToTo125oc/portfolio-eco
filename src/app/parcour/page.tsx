export default function MonParcours() {
    return (
      <div className="flex flex-col items-center">
        <h1>Etude ...</h1>

        <div className="m-7">
          <ol className="relative  border-s  border-gray-700 text-gray-400">                  
              <li className="mb-10 ms-6">            
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-gray-900 ">
                  </span>
                  <h3 className="font-medium leading-tight">2024 - IDEE PROD / BUT Informatique dernière année</h3>
                  <p className="text-sm">En cours</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-300 rounded-full -start-4 ring-4 ring-gray-900 ">
                  </span>
                  <h3 className="font-medium leading-tight">2023 / 2024 - BUT Informatique 2e année</h3>
                  <p className="text-sm">Java - Laravel - angular</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -start-4 ring-4 ring-gray-900 ">
                  </span>
                  <h3 className="font-medium leading-tight">été 2024 - IDEE PROD</h3>
                  <p className="text-sm">Flutter - NestJS</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -start-4 ring-4 ring-gray-900 ">
                  </span>
                  <h3 className="font-medium leading-tight">2022 / 2023 - BUT Informatique 1er année</h3>
                  <p className="text-sm">Python - Java</p>
              </li>
              <li className="ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-600 rounded-full -start-4 ring-4 ring-gray-900 ">
                  </span>
                  <h3 className="font-medium leading-tight">2021 / 2023 - BAC STI2D</h3>
                  <p className="text-sm">C++ pour l'iot</p>
              </li>
          </ol>

        </div>
      </div>
    );
  }