import { useEffect } from 'react';
import AboutUs from "./../../../../../layout/AboutUs.jsx";


const args = {
};

const TempoComponent = () => {
  const notifyStoryRenderedArgs = () => {
    const notification = { filepath: '/home/peter/tempo-api/projects/96/c0/96c04234-6b9f-4cbc-8164-91dc695da190/src/layout/AboutUs.jsx', componentName: 'AboutUs', args };
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

  return <AboutUs {...args}/>;
}



export default TempoComponent;