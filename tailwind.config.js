module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['Open Sans', 'sans-serif'],
        'hind-font': ['Hind', 'sans-serif'],
        'font-robot': ['Roboto', 'sans-serif'],
        'robot-condensed': ['Roboto Condensed', 'sans-serif'],
        'robot-slab': ['Roboto Slab', 'serif'],
        'source-serif': ['Source Serif Pro', 'serif'],
        'ubuntu-mono': ['Ubunto Mono', 'monospace'],
        'ubunto': ['Ubuntu', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'ibm-sans': ['IBM Plex Sans', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace']
      },
      backgroundImage: theme => ({
        'space-one':
          'url(https://wallpapers.com/images/hd/space-aesthetic-colorful-galaxy-wxtxbwrpc88h3yny.jpg)',
          'space-two':
          'url(https://c4.wallpaperflare.com/wallpaper/186/253/125/space-art-fantasy-art-outer-space-sky-wallpaper-preview.jpg)',
          'space-two-alt':
          'url(https://i.pinimg.com/564x/a2/e3/a5/a2e3a5ac656e1a9346a259414c135e9b.jpg)',
          'display-bg':
          'url(https://i.pinimg.com/236x/1d/43/2b/1d432b9418a7228c44728e2ef3f472ce.jpg)',
          'space-lg':
          'url(https://i.pinimg.com/564x/4a/66/6b/4a666b16cf8a15b9687edb5085012589.jpg)',
          'space-mb':
          'url(https://i.pinimg.com/564x/92/7d/f6/927df62d6cbdd3d73be7aaa1806d7f78.jpg)',
          'space-tb':
          'url(https://i.pinimg.com/564x/5a/f3/12/5af312bc7a55f35c5c300ae7027dc45b.jpg)',
          'gal-desk':
          'url(https://i.pinimg.com/originals/51/6f/b5/516fb53642fbca78f3ee5c7f2a213e1c.jpg)',
          'gal-mb':
          'url(https://i.pinimg.com/564x/ce/07/58/ce0758f459be3d0abaa377c320b87316.jpg)',
          'rock-des':
          'url(https://i.pinimg.com/564x/87/5f/bc/875fbcf5e76f8619d511b7bddc1833b1.jpg)',
          'rock-mb':
          'url(https://i.pinimg.com/236x/37/89/de/3789de6701c01a98644c18e6cdfe844f.jpg)',
          'nebula':
          'url(https://i.pinimg.com/564x/4d/67/1d/4d671d7d4839f084264ff173f6591a45.jpg)',
          'os':
          'url(https://images.alphacoders.com/453/453086.jpg)',
          'exopl':
          'url(https://i.pinimg.com/564x/72/e8/29/72e829c5c51b97268fe950d575cdf277.jpg)',
          'exo-desk':
          'url(https://i.pinimg.com/originals/af/e9/60/afe9602bcb9e5f02f2015904dc0ceb68.jpg)',
          'spacecraft': 
          'url(https://i.pinimg.com/564x/64/7a/65/647a65b7024294928068720e989173c3.jpg)',
          'landing':
          'url(https://i.pinimg.com/564x/18/2a/3f/182a3f67852b904aa0496ca27b7d165e.jpg)',
        'astro':
        'url(https://i.pinimg.com/236x/02/57/9a/02579a20280bb1095b1b1e1070834de6.jpg)',
        'blog':
        'url(https://wallpapercave.com/wp/wp5609060.jpg)',
        'logo':
        'url(https://i.pinimg.com/564x/c1/d9/28/c1d9288eebb54b904811e416f71a72d4.jpg)',
        'launch-success':
        'url(https://i.pinimg.com/564x/71/20/3c/71203cdb624b4a90992baf26d60d3b3f.jpg)',
        'launch-failure':
        'url(https://i.pinimg.com/564x/7e/1d/9f/7e1d9f652d6b408855878498c7d373f6.jpg)',
        'placeholder':
        'url(https://wallpaperaccess.com/full/678555.jpg)',
        'article':
        'url(https://images.wallpapersden.com/image/download/nebula_am5sZ2qUmZqaraWkpJRpZmVqrWdraGg.jpg)' 
      })
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ]
}