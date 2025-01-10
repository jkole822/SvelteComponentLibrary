/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,svelte}"],
  theme: {
    extend: {},
    keyframes: {
      enterFromBottom: {
        from: {
          transform: "translate(-50%, 100%)",
          opacity: 0
        },
        to: {
          transform: "translate(-50%, -50%)",
          opacity: 1
        }
      },
      enterFromTop: {
        from: {
          transform: "translate(-50%, 0%)",
          opacity: 0
        },
        to: {
          transform: "translate(-50%, 60%)",
          opacity: 1
        }
      },
      enterFromRight: {
        from: {
          transform: "translateX(300px)",
          opacity: 0
        },
        to: {
          transform: "translateX(0)",
          opacity: 1
        }
      },
      enterFromLeft: {
        from: {
          transform: "translateX(-300px)",
          opacity: 0
        },
        to: {
          transform: "translateX(0)",
          opacity: 1
        }
      },
      exitToBottom: {
        from: {
          transform: "translate(-50%, -50%)",
          opacity: 1
        },
        to: {
          transform: "translate(-50%, 100%)",
          opacity: 0
        }
      },
      exitToTop: {
        from: {
          transform: "translate(-50%, 60%)",
          opacity: 1
        },
        to: {
          transform: "translate(-50%, 0%)",
          opacity: 0
        }
      },
      exitToRight: {
        from: {
          transform: "translateX(0)",
          opacity: 1
        },
        to: {
          transform: "translateX(300px)",
          opacity: 0
        }
      },
      exitToLeft: {
        from: {
          transform: "translateX(0)",
          opacity: 1
        },
        to: {
          transform: "translateX(-300px)",
          opacity: 0
        }
      },
      fadeIn: {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      },
      fadeOut: {
        from: {
          opacity: 1
        },
        to: {
          opacity: 0
        }
      },
      overlayFadeIn: {
        from: {
          opacity: 0,
          zIndex: -5
        },
        to: {
          opacity: 0.8,
          zIndex: 5
        }
      },
      overlayFadeOut: {
        from: {
          opacity: 0.8,
          zIndex: 5
        },
        to: {
          opacity: 0,
          zIndex: -5
        }
      },
      scaleIn: {
        from: {
          transform: "rotateX(-30deg) scale(0.9)",
          opacity: 0
        },
        to: {
          transform: "rotateX(0deg) scale(1)",
          opacity: 1
        }
      },
      scaleOut: {
        from: {
          transform: "rotateX(0deg) scale(1)",
          opacity: 1
        },
        to: {
          transform: "rotateX(-10deg) scale(0.95)",
          opacity: 0
        }
      }
    },
    animation: {
      enterFromBottom: "enterFromBottom 400ms ease-in-out",
      exitToBottom: "exitToBottom 400ms ease-in-out",

      enterFromTop: "enterFromTop 400ms ease-in-out",
      exitToTop: "exitToTop 400ms ease-in-out",

      enterFromLeft: "enterFromLeft 250ms ease-in-out",
      enterFromLeftSlow: "enterFromLeft 400ms ease-in-out",

      enterFromRight: "enterFromRight 250ms ease-in-out",
      enterFromRightSlow: "enterFromRight 400ms ease-in-out",

      exitToLeft: "exitToLeft 250ms ease-in-out",
      exitToLeftSlow: "exitToLeft 400ms ease-in-out",

      exitToRight: "exitToRight 250ms ease-in-out",
      exitToRightSlow: "exitToRight 400ms ease-in-out",

      fadeIn: "fadeIn 250ms ease-in-out",
      fadeOut: "fadeOut 250ms ease-in-out",

      overlayFadeIn: "overlayFadeIn 400ms ease-in-out",
      overlayFadeOut: "overlayFadeOut 400ms ease-in-out",

      scaleIn: "scaleIn 250ms ease-in-out",
      scaleOut: "scaleOut 250ms ease-in-out"
    }
  },
  plugins: [],
}

