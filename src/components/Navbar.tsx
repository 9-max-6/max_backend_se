import { Button } from "./ui/button"

function Navbar() {
  return (
    <div>
        <ul className="w-full">
       
        <div className="w-full mx-auto flex space-between gap-6 lg:gap-12">
            <li>
                <Button variant="ghost">
                    Education
                </Button>
            </li>
            <li>
                <Button variant="ghost">
                    Projects
                </Button>
            </li>
            <li>
                <Button variant="ghost">
                    Skills
                </Button>
            </li>
            <li>
                <Button variant="ghost">
                    Interests
                </Button>
            </li>
            
        </div>
        </ul>
    </div>
  )
}

export default Navbar