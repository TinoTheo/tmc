// app/components/site-footer.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SiteFooterComponent extends Component {
  @tracked currentYear = new Date().getFullYear();

  footerLinks = [
    { label: 'Our Beliefs', url: '#beliefs' },
    { label: 'Ministries', url: '#ministries' },
    { label: 'Sermons', url: '#sermons' },
    { label: 'Events', url: '#events' }
  ];

  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/share/1A1ybDUQD7/' },
    { name: 'YouTube', icon: 'youtube', url: '#' },

  ];

  @service notifications;
  @tracked email = '';
  @tracked isLoading = false;
  @tracked subscriptionStatus = null; // 'success' | 'error'

  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  @action
  async handleSubscribe(event) {
    event.preventDefault();
    
    if (!this.email || !this.emailRegex.test(this.email)) {
      this.notifications.error('Please enter a valid email address');
      return;
    }

    try {
      this.isLoading = true;
      this.subscriptionStatus = null;

      // Replace with your API endpoint
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: this.email }),
      });

      if (!response.ok) throw new Error('Subscription failed');
      
      this.subscriptionStatus = 'success';
      this.notifications.success('Subscription successful!');
      this.email = ''; // Reset form
      
    } catch (error) {
      this.subscriptionStatus = 'error';
      this.notifications.error(error.message || 'Subscription failed. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }
}