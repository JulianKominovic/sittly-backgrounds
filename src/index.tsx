import { memo } from 'react'
import { BsCardImage, BsDownload, BsGlobe } from 'react-icons/bs'
import {
  type ExtensionPages,
  type ExtensionMetadata
} from 'sittly-devtools/dist/types'

const { register, api, components, hooks } = window.SittlyDevtools
const { Command } = components
const { useServices } = hooks
const { shell, files } = api
const { saveImage } = files
const { setWallpaper, openURI } = shell
const WALLPAPERS_LENGTH = 354

const MemoizedImage = memo(({ imageUrl }: { imageUrl: string }) => (
  <img
    src={imageUrl}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px'
    }}
  />
))

const pages: ExtensionPages = [
  {
    name: 'Wallpapers',
    route: '/wallpapers',
    icon: <BsCardImage />,
    description: 'Choose between 350 AI generated wallpapers',
    component: () => {
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      )
      return (
        <Command.Grid
          columns={4}
          id="sittly-wallpapers"
          items={Array.from({ length: WALLPAPERS_LENGTH }).map((_, index) => {
            const padding = String(index + 1).padStart(3, '0')
            const imageUrl = `https://raw.githubusercontent.com/JulianKominovic/sittly-wallpapers/main/assets/dddepth-${padding}.jpg?raw=true`
            const tinyImageUrl = `https://raw.githubusercontent.com/JulianKominovic/sittly-wallpapers/main/assets/tiny/dddepth-${padding}.webp`
            return {
              customChildren: (
                <MemoizedImage imageUrl={tinyImageUrl} key={tinyImageUrl} />
              ),
              onClick: () => setWallpaper(imageUrl),
              filteringText: padding,
              onHighlight() {
                setContextMenuOptions([
                  {
                    onClick() {
                      setWallpaper(imageUrl)
                    },
                    title: 'Set as wallpaper',
                    icon: <BsCardImage />,
                    description: 'Set this image as your wallpaper'
                  },
                  {
                    onClick() {
                      saveImage(imageUrl)
                    },
                    title: 'Download',
                    icon: <BsDownload />,
                    description: 'this image'
                  },
                  {
                    onClick() {
                      openURI('https://fffuel.co/dddepth/')
                    },
                    title: 'Thanks to fffuel',
                    icon: <BsGlobe />,
                    description: "Visit fffuel's website"
                  }
                ])
              }
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
