import { Button } from "./ui/button"

function Navbar() {
  return (
    <div>
       
        <ul className="w-full mx-auto flex gap-6 lg:gap-16">
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
            
        </ul>
    </div>
  )
}

export default Navbar