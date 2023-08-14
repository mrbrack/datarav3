export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'meta_title',
        type: 'string',
        title: 'Meta Title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'excerpt',
        type: 'string',
        title: 'Excerpt',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'published_date',
        type: 'date',
        title: 'Published Date',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'featured_image',
        type: 'image',
        title: 'Thumbnail',
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          },
        ],
      },
      {
        name: 'header_image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          },
        ],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        },
      },
      {
        title: 'Body Content',
        name: 'body',
        type: 'array',
        validation: (Rule) => Rule.required(),
        of: [
          {
            type: 'block',
            title: 'Block',
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'External link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL'
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean'
                    }
                  ]
                },
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal link',
                  fields: [
                    {
                      name: 'reference',
                      type: 'reference',
                      title: 'Reference',
                      to: [
                        { type: 'post' },
                        // other types you may want to link to
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            type: 'image',
          },
        ],
      }
    ],
  }
  