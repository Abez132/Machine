import { useEffect } from 'react';
import Hero from "./../../../../../../layout/components/Hero.jsx";


const args = {
};

const TempoComponent = () => {
  const notifyStoryRenderedArgs = () => {
    const notification = { filepath: '/home/peter/tempo-api/projects/96/c0/96c04234-6b9f-4cbc-8164-91dc695da190/src/layout/components/Hero.jsx', componentName: 'Hero', args };
    if (typeof window !== "undefined" && (window as any).notifyStoryRenderedArgs) {
      (window as any).notifyStoryRenderedArgs(notification);
    } else if (typeof window !== "undefined") {
      if (!Array.isArray((window as any).pendingStoryArgsNotifications)) {
        (window as any).pendingStoryArgsNotifications = [];
      }
      (window as any).pendingStoryArgsNotifications.push(notification);
    }
  }

  notifyStoryRenderedArgs();

  return <Hero {...args}/>;
}



export default TempoComponent;