export default function MonParcours() {
    return (
      <div className="flex flex-col items-center">
        <div className="mt-12">
          <ol className="relative  border-s  border-gray-700 text-gray-400">                  
              <li className="mb-10 ms-6">            
                  <span className="parcour bg-green-200 ">
                  </span>
                  <h3 className="text-parcour">IDEE PROD / BUT Informatique dernière année</h3>
                  <p className="text-sm">2024</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="parcour bg-green-300">
                  </span>
                  <h3 className="text-parcour">BUT Informatique 2e année</h3>
                  <p className="text-sm">2023 / 2024</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="parcour bg-green-400 ">
                  </span>
                  <h3 className="text-parcour">Job chez IDEE PROD</h3>
                  <p className="text-sm">été 2023</p>
              </li>
              <li className="mb-10 ms-6">
                  <span className="parcour bg-green-500 ">
                  </span>
                  <h3 className="text-parcour"> BUT Informatique 1er année</h3>
                  <p className="text-sm">2022 / 2023</p>
              </li>
              <li className="ms-6">
                  <span className="parcour bg-green-600 ">
                  </span>
                  <h3 className="text-parcour">BAC STI2D</h3>
                  <p className="text-sm">2021 / 2023</p>
              </li>
          </ol>

        </div>
      </div>
    );
  }