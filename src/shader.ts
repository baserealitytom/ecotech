export const vertexShader = `
    uniform float u_time;
    void main() {
		gl_PointSize = 5.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, sin((position.z / 1.0) + u_time) + position.y, position.z, 1.0);
    }
`;

export const fragmentShader = `
    void main() {
		gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
`;