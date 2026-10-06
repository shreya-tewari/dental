import { useState } from 'react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts, blogTags } from '../content/blog';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? blogPosts : blogPosts.filter((p) => p.tag === activeTag);

  return (
    <>
      <section className="bg-black py-24" aria-labelledby="blog-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Blog</span>
            <h1 id="blog-headline" className="section-headline text-neige mb-4">
              Insights for the dental industry
            </h1>
            <p className="text-neige/60 max-w-lg mx-auto">
              Articles, guides, and research from the DentaIQ team.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogTags.map((tag) => (
              <button
                key={tag}
                id={`blog-tag-${tag.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-black text-neige'
                    : 'bg-white border border-border text-body hover:border-black'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.06}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="card-white group flex flex-col h-full hover:shadow-md transition-shadow duration-200"
                >
                  {/* Post image */}
                  <div className="w-full aspect-[16/9] bg-neige-dark rounded-xl mb-5 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/80 text-neige backdrop-blur-sm">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-base font-bold text-black leading-snug mb-2 group-hover:underline decoration-1 underline-offset-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed flex-1 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted pt-3 border-t border-border">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
