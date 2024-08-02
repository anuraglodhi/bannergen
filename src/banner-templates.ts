import React from "react";

export interface BannerConfig {
  id: number;
  backgroundImage: string;
  title: {
    style: React.CSSProperties;
  };
  subtitle: {
    style: React.CSSProperties;
  };
  featureImage: {
    style: React.CSSProperties;
  };
  cta: {
    style: React.CSSProperties;
  };
}

export const bannerTemplates: BannerConfig[] = [
  {
    id: 1,
    title: {
      style: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        top: "10%",
        left: "4%",
        maxWidth: "50%",
        lineHeight: 1.2,
      },
    },
    subtitle: {
      style: {
        color: "#000",
        fontSize: 16,
        top: "36%",
        left: "4%",
        maxWidth: "50%",
        lineHeight: 1.2,
      },
    },
    backgroundImage: "/backgrounds/landscape/1.png",
    featureImage: {
      style: {
        width: "54%",
        aspectRatio: 1,
        left: "54%",
        top: "14%",
        borderRadius: "100%",
      },
    },
    cta: {
      style: {
        left: "4%",
        top: "70%",
        backgroundColor: "#000",
        borderRadius: 5,
        color: "#FEAB08",
        padding: "5px 10px",
      },
    },
  },
  {
    id: 2,
    title: {
      style: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        top: "20%",
        left: "5%",
        maxWidth: "44%",
        lineHeight: 1.2,
      },
    },
    subtitle: {
      style: {
        color: "#fff",
        fontSize: 16,
        top: "46%",
        left: "5%",
        maxWidth: "44%",
        lineHeight: 1.2,
      },
    },
    backgroundImage: "/backgrounds/landscape/4.png",
    featureImage: {
      style: {
        width: "45.7%",
        height: "68%",
        left: "50.4%",
        top: "10.6%",
      },
    },
    cta: {
      style: {
        left: "52%",
        top: "79%",
        color: "#000",
        fontWeight: "bold",
      },
    },
  },
  {
    id: 3,
    title: {
      style: {
        color: "#E21B24",
        fontSize: 20,
        fontWeight: "bold",
        top: "10%",
        left: "4%",
        maxWidth: "50%",
        lineHeight: 1.2,
      }
    },
    subtitle: {
      style: {
        color: "#000",
        fontSize: 12,
        top: "36%",
        left: "4%",
        maxWidth: "50%",
        lineHeight: 1.2,
      }
    },
    backgroundImage: "/backgrounds/landscape/3.png",
    featureImage: {
      style: {
        borderRadius: "100%",
        width: "37%",
        aspectRatio: 1,
        left: "62%",
        top: "18%",
        border: "2px solid #fff"
      }
    },
    cta: {
      style: {
        left: "4%",
        top: "70%",
        backgroundColor: "#E21B24",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: 5
      }
    },
  },
  {
    id: 4,
    title: {
      style: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        top: "10%",
        left: "5%",
        lineHeight: 1.2,
        maxWidth: "40%",
      }
    },
    subtitle: {
      style: {
        color: "#fff",
        fontSize: 16,
        top: "36%",
        left: "5%",
        maxWidth: "40%",
        lineHeight: 1.2,
      }
    },
    backgroundImage: "/backgrounds/landscape/2.png",
    featureImage: {
      style: {
        width: "50%",
        aspectRatio: 1,
        left: "50%",
        top: "5%",
        borderRadius: "100%",
      }
    },
    cta: {
      style: {
        left: "5%",
        top: "60%",
        backgroundColor: "#fff",
        color: "#000",
        padding: "5px 10px",
        borderRadius: 5
      }
    },
  },
  {
    id: 5,
    title: {
      style: {
        color: "#35B1D5",
        fontSize: 20,
        fontWeight: "bold",
        top: "8%",
        left: "5%",
        maxWidth: "50%",
        lineHeight: 1.2,
      },
    },
    subtitle: {
      style: {
        color: "#000",
        fontSize: 14,
        top: "35%",
        left: "5%",
        maxWidth: "50%",
        lineHeight: 1.2,
      },
    },
    backgroundImage: "/backgrounds/landscape/5.png",
    featureImage: {
      style: {
        width: "45%",
        aspectRatio: 1,
        left: "53%",
        top: "8%",
        zIndex: -20,
      },
    },
    cta: {
      style: {
        left: "5%",
        top: "50%",
        backgroundColor: "#35B1D5",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: 5,
        fontSize: 14,
      },
    },
  },
  {
    id: 6,
    title: {
      style: {
        color: "#4EA5C0",
        fontSize: 20,
        fontWeight: "bold",
        top: "20%",
        left: "5%",
        maxWidth: "50%",
        lineHeight: 1.2,
      }
    },
    subtitle: {
      style: {
        color: "#fff",
        fontSize: 16,
        top: "36%",
        left: "5%",
        maxWidth: "50%",
        lineHeight: 1.2,
      }
    },
    backgroundImage: "/backgrounds/landscape/6.png",
    featureImage: {
      style: {
        height: "100%",
        aspectRatio: 1,
        left: "30%",
        zIndex: -20,
      }
    },
    cta: {
      style: {
        left: "5%",
        top: "60%",
        backgroundColor: "#4EA5C0",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: 5,
        fontSize: 14,
      }
    },
  },
];
