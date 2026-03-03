import { getPost, getAllPostSlugs } from '../../../lib/posts';
import AdSense from '../../../components/AdSense';

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: `${post.title} | Smart Home Guides`,
    description: post.description || post.title,
    keywords: post.keywords?.join(', '),
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <article>
      <a href="/" className="back-link">&larr; Back to all posts</a>
      <h1>{post.title}</h1>
      <span className="post-date">{post.date}</span>

      <AdSense slot="post-top" />

      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <AdSense slot="post-bottom" />
    </article>
  );
}
