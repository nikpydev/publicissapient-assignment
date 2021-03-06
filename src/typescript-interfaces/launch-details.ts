export interface LaunchDetails {
  flight_number: number;
  mission_name: string;
  mission_id: Array<string>;
  launch_year: string;
  launch_success: boolean;
  land_success: boolean;
  image_url: string;
}
