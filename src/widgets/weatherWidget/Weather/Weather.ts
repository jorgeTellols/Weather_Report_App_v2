class Weather {
  private date: string;

  private icon: string;

  private description: string;

  private temperature: number;

  private tempMax: number;

  private tempMin: number;

  private rainProb: number;

  private timeZone: string;

  private windSpeed: number;

  private humidity: number;

  private pressure: number;

  constructor(
    date: string,
    icon: string,
    description: string,
    temperature: number,
    tempMax: number,
    tempMin: number,
    rainProb: number,
    timeZone: string,
    windSpeed: number,
    humidity: number,
    pressure: number,
  ) {
    this.date = date;
    this.icon = icon;
    this.description = description;
    this.temperature = temperature;
    this.tempMax = tempMax;
    this.tempMin = tempMin;
    this.rainProb = rainProb;
    this.timeZone = timeZone;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  getDate(): string {
    return this.date;
  }

  getIcon(): string {
    return this.icon;
  }

  getDescription(): string {
    return this.description;
  }

  getTemperature(): number {
    return this.temperature;
  }

  getTempMax(): number {
    return this.tempMax;
  }

  getTempMin(): number {
    return this.tempMin;
  }

  getRainProb(): number {
    return this.rainProb;
  }

  getTimeZone(): string {
    return this.timeZone;
  }

  getWindSpeed(): number {
    return this.windSpeed;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }
}

export default Weather;
