import React from "react"
import getYoutubeId from "get-youtube-id"

// <pre>{JSON.stringify(value, null, 2)}</pre>

const youtubePreview = ({ value }) => {
  const id = getYoutubeId(value.url)
  const url = `https://www.youtube.com/embed/${id}`

  if (!id) {
    return <div>Missing youtube link</div>
  }
  return (
    <iframe
      title="Youtube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default {
  name: "youtube",
  type: "object",
  title: "youtube embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: youtubePreview,
  },
}
