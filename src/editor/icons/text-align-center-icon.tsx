import type { SVGProps } from 'react'

interface TextAlignCenterIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function TextAlignCenterIcon(props: TextAlignCenterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props?.size || 24}
      height={props?.size || 24}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M32 68a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm32 32a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm152 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Zm-24 40H64a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Z"></path>
    </svg>
  )
}
