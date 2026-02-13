import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypewriterText from "@/components/valentine/TypewriterText";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import FloatingOinks from "@/components/valentine/FloatingOinks";
import CountdownTimer from "@/components/valentine/CountdownTimer";
import ConfettiExplosion from "@/components/valentine/ConfettiExplosion";

/* ─── Fade-in wrapper ─── */
const FadeSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/* ─── Stagger word reveal ─── */
const WordReveal = ({ words, className = "" }: { words: string[]; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={`flex flex-wrap justify-center gap-x-4 gap-y-2 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.3 }}
          className="font-display text-3xl md:text-4xl font-semibold text-primary"
        >
          {word}.
        </motion.span>
      ))}
    </div>
  );
};

/* ─── Typewriter section helper ─── */
const TypewriterSection = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <TypewriterText
        text={text}
        trigger={inView}
        speed={40}
        className={`font-body text-xl md:text-2xl leading-relaxed text-foreground/80 ${className}`}
      />
    </div>
  );
};

const Index = () => {
  const [saidYes, setSaidYes] = useState(false);

  return (
    <div className="relative bg-background overflow-x-hidden">
      {/* ═══════════════ Section 1: Opening — The Bus Scene ═══════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-8">
        <FloatingHearts count={8} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center max-w-3xl z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-sans-clean text-sm uppercase tracking-[0.3em] text-primary/60 mb-8"
          >
            For My Kutty Pappaa
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            A Love Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="font-body text-xl md:text-2xl text-foreground/70 italic leading-relaxed"
          >
            "It started with a song on a bus… and a girl who called my name."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="mt-16"
          >
            <span className="text-primary text-2xl" style={{ animation: "pulse-soft 2s infinite" }}>
              ♥
            </span>
            <p className="text-sm text-muted-foreground mt-2 font-sans-clean">scroll down</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ Section 2: The First Meeting ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 relative">
        <FloatingHearts count={10} />
        <div className="max-w-2xl text-center z-10">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            The Beginning
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
            The First Meeting
          </h2>
          <p className="font-body text-lg text-foreground/70 mb-8 leading-relaxed">
            A Zoo IV visit. A forest road. A bus. I was singing along to a song,
            lost in the moment…
          </p>
          <TypewriterSection text="And then… you called my name. And everything changed." />
        </div>
      </FadeSection>

      {/* ═══════════════ Section 3: The Music Concert ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 bg-accent/30">
        <div className="max-w-2xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            🎵 The Concert
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
            Side by Side
          </h2>
          <p className="font-body text-lg text-foreground/70 mb-6 leading-relaxed">
            We sat next to each other in an auditorium. We talked about songs.
          </p>
          <p className="font-body text-lg text-foreground/70 mb-8 leading-relaxed">
            Then at the college culturals, we shared stories — about school, about
            our lives, about everything that made us who we are.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-2xl italic text-primary/80"
          >
            "And with every word, you became more real to me."
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 4: Falling — April 2025 ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 relative">
        <FloatingHearts count={6} />
        <div className="max-w-2xl text-center z-10">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            💘 April 2025
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
            The Fall
          </h2>
          <TypewriterSection text="April. That's when I knew. You were my 'The One.'" />
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 1 }}
          >
            <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-relaxed">
              Nobody else made sense.
              <br />
              Only you did.
            </p>
          </motion.div>
          <motion.p
            className="font-body text-lg text-foreground/60 mt-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 4, duration: 1 }}
          >
            And from that moment, I decided to give my all — lovingly, completely —
            to be closer to you.
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 5: Who She Is ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 bg-accent/30">
        <div className="max-w-3xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            ✨ Who You Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            Let Me Tell You About Her
          </h2>
          <WordReveal words={["Smart", "Chaotic", "Funny", "Caring", "Stubborn"]} />
          <motion.p
            className="font-body text-xl text-foreground/70 mt-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1 }}
          >
            Stubborn in the best way possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-8 space-y-4"
          >
            <p className="font-display text-2xl md:text-3xl text-primary italic">
              "The rarest. The most beautiful."
            </p>
            <p className="font-body text-lg text-foreground/60">
              She stays for the ones she loves — no matter what.
            </p>
          </motion.div>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 6: The Things That Make Us "Us" ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            😂 Inside Jokes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            The Things That Make Us <em>"Us"</em>
          </h2>
          <div className="space-y-8">
            <motion.div
              className="bg-accent/50 rounded-2xl p-8 border border-primary/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-display text-2xl text-foreground italic">
                "You take care of this side, I'll take care of this side"
              </p>
            </motion.div>
            <motion.div
              className="bg-accent/50 rounded-2xl p-8 border border-primary/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-display text-4xl font-bold text-primary">EVS</p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                If you know, you know 😏
              </p>
            </motion.div>
          </div>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 7: I Oink You ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 relative bg-accent/20">
        <FloatingOinks />
        <div className="max-w-2xl text-center z-10">
          <motion.p
            className="font-display text-6xl md:text-8xl font-bold text-primary mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            I Oink Youuu
          </motion.p>
          <motion.p
            className="text-6xl mb-8"
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            🐷
          </motion.p>
          <motion.p
            className="font-body text-lg text-foreground/60 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            Our language. Our world. Our oink.
          </motion.p>
          {/* Peppa Pig easter egg */}
          <motion.p
            className="text-xs text-foreground/20 mt-20 font-sans-clean"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1 }}
          >
            psst… Peppa would be proud 🐽
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 8: "Ahmmm" ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center">
          <motion.p
            className="font-display text-6xl md:text-7xl font-bold text-primary/30 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            "Ahmmm"
          </motion.p>
          <TypewriterSection text="When I pour my heart out… she says 'Ahmmm.' And that sound lives in my head forever." />
          <motion.p
            className="font-body text-lg text-foreground/50 mt-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 4, duration: 1 }}
          >
            No words needed. Just that one sound.
            <br />
            And I know she's listening. Really listening.
            <br />
            Wanting to know more.
          </motion.p>
          <motion.p
            className="font-display text-xl text-primary italic mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 5, duration: 1 }}
          >
            And I love her voice the most.
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 9: Growing Together ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 bg-accent/30">
        <div className="max-w-2xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            💪 Growth
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
            Growing Together
          </h2>
          <motion.p
            className="font-display text-2xl md:text-3xl text-foreground/80 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "I was an idiot. Still am.
            <br />
            But now an <em className="text-primary">improving</em> idiot."
          </motion.p>
          <motion.p
            className="font-body text-lg text-foreground/60 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            She showed me what's right and what's wrong. She corrected my mistakes
            with love, not judgment.
          </motion.p>
          <motion.p
            className="font-display text-2xl text-primary italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            She makes me better. Every single day.
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 10: Our Dreams ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 relative">
        <FloatingHearts count={5} />
        <div className="max-w-2xl text-center z-10">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            🌍 Someday
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">
            Our Dreams
          </h2>
          <motion.p
            className="font-display text-3xl text-primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Paris. And beyond.
          </motion.p>
          <motion.p
            className="font-body text-xl text-foreground/70 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Every country. Every adventure. Together.
          </motion.p>
          <motion.p
            className="font-display text-2xl text-foreground/60 italic leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            "Playing with each other's hair…
            <br />
            even after it turns grey."
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 11: The Little Things ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 bg-accent/30">
        <div className="max-w-3xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            🍫 The Details
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            The Little Things I Know About You
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Rava crispy dosas",
              "Biryani lover",
              "Brownie queen",
              "Chocolate pastries",
              "Mango ice cream cones",
              "Bao bao 🥟",
              "Taylor Swift 🎵",
              "Olivia Rodrigo",
              "JVKE — Beautiful Things",
              "Kakha Kakha 🎶",
              "Vaa Senthazhini",
              "Peppa Pig 🐷",
              "Bridgerton 📺",
              "TSITP ☀️",
              "Maxton Hall",
              "To All the Boys 💌",
              "Donuts & burgers",
              "Fried chicken 🍗",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="bg-background rounded-xl p-4 border border-primary/10 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(0, 72%, 51%)" }}
              >
                <p className="font-body text-sm text-foreground/80">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="font-display text-xl text-primary italic mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Every little thing about you is my favorite thing.
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 12: A Letter From Tarun ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            💌 A Letter
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
            Dear Sandhya,
          </h2>
          <div className="text-left space-y-6 font-body text-lg text-foreground/70 leading-relaxed">
            <p>
              There are so many things I want to say to you, and yet words always
              feel too small for what I feel.
            </p>
            <p>
              From the moment you called my name on that bus, something shifted in
              me. I didn't know it then, but that was the beginning of the most
              beautiful chapter of my life.
            </p>
            <p>
              You make the ordinary extraordinary. Your laughter is my favorite
              sound (after "Ahmmm," of course 🐷). Your stubbornness is my favorite
              challenge. Your heart is my favorite place to call home.
            </p>
            <p>
              I know I'm not perfect. I've been an idiot more times than I can
              count. But you've made me want to be better — and that's the most
              powerful thing anyone has ever done for me.
            </p>
            <p>
              Every day with you is a gift I don't take for granted.
              Not a single one.
            </p>
            <motion.p
              className="font-display text-xl text-primary italic text-center pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Forever yours,
              <br />
              Your Tarun ♥
            </motion.p>
          </div>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 13: Countdown ═══════════════ */}
      <FadeSection className="min-h-screen flex items-center justify-center px-8 bg-accent/30">
        <div className="max-w-3xl text-center">
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-primary/50 mb-6">
            ⏰ Counting Down
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            February 22, 2026
          </h2>
          <p className="font-body text-lg text-foreground/60 mb-12">
            365 days since a song on a bus changed everything.
          </p>
          <CountdownTimer />
          <motion.p
            className="font-display text-xl text-primary italic mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            One year. And this is only the beginning.
          </motion.p>
        </div>
      </FadeSection>

      {/* ═══════════════ Section 14: The Grand Finale ═══════════════ */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <ConfettiExplosion active={saidYes} />
        {!saidYes ? (
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Sandhya…
            </motion.p>
            <motion.p
              className="font-display text-4xl md:text-6xl font-bold text-primary leading-tight mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Will you be my Valentine?
            </motion.p>
            <motion.button
              onClick={() => setSaidYes(true)}
              className="bg-primary text-primary-foreground font-display text-2xl px-16 py-5 rounded-full shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.5, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ animation: "pulse-soft 2s infinite" }}
            >
              Yes ♥
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <p className="text-8xl mb-8">💝</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6">
              I Oink You Forever
            </h2>
            <p className="font-body text-xl text-foreground/70 mb-4">
              You just made the happiest boy in the world even happier.
            </p>
            <p className="font-display text-2xl text-primary/60 italic">
              — Your Tarun 🐷♥
            </p>
          </motion.div>
        )}
        <FloatingHearts count={saidYes ? 30 : 5} />
      </section>

      {/* Footer */}
      <div className="py-12 text-center">
        <p className="font-sans-clean text-xs text-foreground/20">
          Made with all my heart, for my Kutty Pappaa ♥
        </p>
      </div>
    </div>
  );
};

export default Index;
