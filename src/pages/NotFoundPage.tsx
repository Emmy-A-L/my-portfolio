import { motion, easeIn, easeOut, easeInOut } from "framer-motion";

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: easeIn } },
};

const illustrationVariants = {
    float: {
        y: [0, -16, 0],
        transition: { repeat: Infinity, duration: 2, ease: easeInOut },
    },
};

const NotFoundPage: React.FC = () => (
    <motion.div
        className="not-found-container bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)",
            color: "#1e293b",
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
            padding: "0 16px",
        }}
    >
        <motion.svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={illustrationVariants}
            animate="float"
            aria-label="404 Illustration"
            style={{ marginBottom: 32 }}
        >
            <circle cx="90" cy="90" r="80" fill="#6366f1" opacity="0.12" />
            <ellipse cx="90" cy="140" rx="45" ry="12" fill="#6366f1" opacity="0.07" />
            <motion.g
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <rect x="50" y="60" width="80" height="48" rx="24" fill="#6366f1" />
                <circle cx="72" cy="84" r="7" fill="#fff" />
                <circle cx="108" cy="84" r="7" fill="#fff" />
                <ellipse cx="90" cy="104" rx="14" ry="6" fill="#fff" opacity="0.7" />
                <motion.text
                    x="90"
                    y="120"
                    textAnchor="middle"
                    fontSize="32"
                    fontWeight="bold"
                    fill="#6366f1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    404
                </motion.text>
            </motion.g>
        </motion.svg>
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                marginBottom: 8,
                textAlign: "center",
            }}
        >
            Page Not Found
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
                fontSize: "1.125rem",
                color: "#64748b",
                marginBottom: 24,
                textAlign: "center",
                maxWidth: 400,
            }}
        >
            Sorry, we couldn't find the page you're looking for.
        </motion.p>
        <motion.a
            href="/"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{
                display: "inline-block",
                padding: "10px 28px",
                background: "#6366f1",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
                transition: "background 0.2s",
            }}
            whileHover={{ backgroundColor: "#4f46e5", scale: 1.04 }}
        >
            Go Home
        </motion.a>
    </motion.div>
);

export default NotFoundPage;