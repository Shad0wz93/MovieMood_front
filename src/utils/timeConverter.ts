export default function MinutesToHoursConverter(duration: number) {

    const hours: number = Math.floor(duration / 60);
    const minutes: number = duration % 60;

    return {
        hours, minutes
    }

}