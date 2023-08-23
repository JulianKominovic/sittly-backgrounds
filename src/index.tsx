import { BsCardImage, BsFile } from 'react-icons/bs'
import {
  type ExtensionPages,
  type ExtensionMetadata
} from 'sittly-devtools/dist/types'

const { register, api, components } = window.SittlyDevtools
const { Command } = components
const { shell } = api
const { setWallpaper } = shell
const WALLPAPERS_LENGTH = 354
const pages: ExtensionPages = [
  {
    name: 'Wallpapers',
    route: '/wallpapers',
    icon: <BsCardImage />,
    description: 'Choose between 350 AI generated wallpapers',
    component: () => {
      return (
        <Command.Grid
          columns={4}
          id="sittly-wallpapers"
          items={Array.from({ length: WALLPAPERS_LENGTH }).map((_, index) => {
            return {
              onClick: () => setWallpaper(index)
            }
          })}
        />
      )
    }
  }
]
/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: 'Wallpapers',
  description: 'Choose between 350 AI generated wallpapers',
  icon: <BsCardImage />,
  repoUrl: 'https://github.com/JulianKominovic/sittly-wallpapers'
}

register({
  pages,
  metadata
})
