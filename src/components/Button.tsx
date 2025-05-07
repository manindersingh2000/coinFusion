
type ButtonProps = {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#5846FB] w-full sm:w-56 rounded-2xl p-2 text-sm text-white hover:bg-[#4835e0] transition-colors">
      {children}
    </button>
  )
}

export default Button
