export default function handleBookMeetingClick(event) {
    event.preventDefault();
    Calendly.initPopupWidget({url: 'https://calendly.com/leadfutresources/30min'});
}